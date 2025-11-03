import DotGrid from "@/components/DotGrid"

export function DotGridSection() {
  return (
    <section id="dotgrid-test" className="relative py-24 overflow-hidden">
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <DotGrid
    dotSize={5}
    gap={15}
    baseColor="#271e37"
    activeColor="#5227ff"
    proximity={120}
    shockRadius={250}
    shockStrength={5}
    resistance={750}
    returnDuration={1.5}
  />
</div>
    </section>
  )
}


