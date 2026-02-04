import type { CommandOutput } from './commands';

interface Props {
  lines: Array<{ command?: string; output: CommandOutput[] }>;
}

export default function TerminalOutput({ lines }: Props) {
  const getLineClass = (type: CommandOutput['type']) => {
    switch (type) {
      case 'success':
        return 'text-[var(--success)]';
      case 'error':
        return 'text-[var(--error)]';
      case 'link':
        return 'text-[var(--accent)] hover:underline cursor-pointer';
      default:
        return 'text-[var(--text-primary)]';
    }
  };

  return (
    <div class="space-y-2 overflow-y-auto" role="log" aria-live="polite" aria-label="Terminal output">
      {lines.map((line, lineIndex) => (
        <div key={lineIndex}>
          {line.command && (
            <div class="flex items-center gap-2">
              <span class="text-[var(--accent)]">visitor@anuragtripathi.com</span>
              <span class="text-[var(--text-muted)]">$</span>
              <span>{line.command}</span>
            </div>
          )}
          {line.output.map((item, itemIndex) => (
            <div key={itemIndex} class={getLineClass(item.type)}>
              {item.type === 'link' && item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {item.content}
                </a>
              ) : (
                <span style={{ whiteSpace: 'pre' }}>{item.content || '\u00A0'}</span>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
