import { Reveal } from '@/components/Reveal'

export function RytzPlatform({
  modules,
}: {
  modules: { group: string; items: string[] }[]
}) {
  return (
    <section className="container pb-24">
      <Reveal>
        <div className="border-t border-border pt-16 md:pt-24" />
      </Reveal>
      <Reveal>
        <p className="text-xs uppercase tracking-wider text-tertiary font-body mb-16">
          Complete Platform &mdash; 12 Modules
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
        {modules.map((group, gi) => (
          <Reveal key={group.group} delay={gi * 80}>
            <div>
              <h3 className="text-small font-body font-medium text-primary mb-5">
                {group.group}
              </h3>
              <div className="space-y-4">
                {group.items.map((item, ii) => {
                  const [name, desc] = item.split(' — ')
                  return (
                    <div
                      key={ii}
                      className="flex items-baseline gap-4 pb-4 border-b border-border"
                    >
                      <span className="text-xs text-tertiary font-body tabular-nums w-3 shrink-0">
                        {gi * 3 + ii + 1}
                      </span>
                      <div>
                        <span className="text-small text-primary font-body">
                          {name}
                        </span>
                        <span className="text-small text-tertiary font-body">
                          {' '}&mdash; {desc}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
