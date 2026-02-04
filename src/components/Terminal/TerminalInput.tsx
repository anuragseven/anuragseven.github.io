import { useState, useRef, useEffect, useMemo } from 'preact/hooks';
import { createExecuteCommand, type CommandOutput, type DynamicData } from './commands';
import TerminalOutput from './TerminalOutput';

interface TerminalLine {
  command?: string;
  output: CommandOutput[];
}

interface Props {
  blogs: DynamicData['blogs'];
  patents: DynamicData['patents'];
  projects: DynamicData['projects'];
}

const commandChips = ['about', 'projects', 'patents', 'skills', 'blogs', 'contact'];

const bootSequence: CommandOutput[] = [
  { type: 'text', content: '' },
  { type: 'success', content: '=== Welcome to anuragtripathi.com ===' },
  { type: 'text', content: '' },
  { type: 'text', content: 'Initializing portfolio...' },
  { type: 'text', content: 'Loading skills... done' },
  { type: 'text', content: 'Loading projects... done' },
  { type: 'text', content: 'Loading patents... done' },
  { type: 'text', content: 'Loading experience... done' },
  { type: 'text', content: '' },
  { type: 'text', content: "Type 'about' to learn more about me." },
  { type: 'text', content: "Type 'help' to see all available commands." },
  { type: 'text', content: '' },
];

export default function TerminalInput({ blogs, patents, projects }: Props) {
  const [input, setInput] = useState('');
  const [lines, setLines] = useState<TerminalLine[]>([{ output: bootSequence }]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const executeCommand = useMemo(
    () => createExecuteCommand({ blogs, patents, projects }),
    [blogs, patents, projects]
  );

  useEffect(() => {
    // Scroll to bottom when new content is added
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    const trimmed = input.trim();

    if (trimmed.toLowerCase() === 'clear') {
      setLines([]);
      setInput('');
      return;
    }

    const output = executeCommand(trimmed);

    // Handle navigation links
    const navLink = output.find((o) => o.type === 'link' && o.href && !o.href.startsWith('http'));
    if (navLink?.href && trimmed.toLowerCase().startsWith('cd ')) {
      window.location.href = navLink.href;
      return;
    }

    setLines((prev) => [...prev, { command: trimmed || undefined, output }]);
    setInput('');
  };

  const handleChipClick = (command: string) => {
    const output = executeCommand(command);
    setLines((prev) => [...prev, { command, output }]);
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      class="bg-[var(--bg-surface)] rounded-lg border border-[var(--border)] overflow-hidden font-mono text-sm h-full flex flex-col"
      onClick={focusInput}
    >
      {/* Terminal Header */}
      <div class="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)] bg-[var(--bg-primary)] shrink-0">
        <div class="flex gap-2">
          <div class="w-3 h-3 rounded-full bg-red-500"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div class="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span class="text-[var(--text-muted)] text-xs ml-2">visitor@anuragtripathi.com</span>
      </div>

      {/* Terminal Body */}
      <div
        ref={terminalRef}
        class="p-4 flex-1 overflow-y-auto"
      >
        <TerminalOutput lines={lines} />

        {/* Input Line */}
        <form onSubmit={handleSubmit} class="flex items-center gap-2 mt-2">
          <span class="text-[var(--accent)]">visitor@anuragtripathi.com</span>
          <span class="text-[var(--text-muted)]">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onInput={(e) => setInput((e.target as HTMLInputElement).value)}
            class="flex-1 bg-transparent outline-none caret-[var(--accent)]"
            autoFocus
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            aria-label="Terminal input"
          />
          <span class="cursor-blink text-[var(--accent)]">_</span>
        </form>
      </div>

      {/* Command Chips (Mobile) */}
      <div class="md:hidden border-t border-[var(--border)] p-3 shrink-0">
        <div class="flex flex-wrap gap-2">
          {commandChips.map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleChipClick(cmd)}
              class="px-3 py-1.5 text-xs rounded-full bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
