const setupFractal = (objStore, reduxStore) => {
  objStore.fractal = {}
  const angle1 = 25     // Will get from Redux Store
  const angle2 = -37    // Will get from Redux Store
  objStore.fractal.start = {
    id: 1,
    vector: [Math.floor(0.5 * objStore.canvas.elt.width), 20],
    scale: 200,         // Will match to canvas
    angleDeg: 5         // Should be pointing vertically up
  }
  objStore.fractal.rules = [
    {
      id: 0,
      name: 'trunk',
      children: [
        {
          id: 0,
          vector: [0, 0],
          scale: 1,
          angleDeg: 0
        }
      ]
    },
    {
      id: 1,
      name: 'tree',
      children: [
        {
          id: 1,
          vector: [0, 0.5],
          scale: 0.8,
          angleDeg: angle1
        },
        {
          id: 1,
          vector: [0, 0.5],
          scale: 0.7,
          angleDeg: angle2
        },
        {
          id: 0,
          vector: [0, 0],
          scale: 0.5,
          angleDeg: 0
        }
      ]
    }
  ]
  objStore.fractal.iteration = 0
  objStore.fractal.current = [objStore.fractal.start]
}

export default setupFractal
