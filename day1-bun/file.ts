// const data = 'I love JavaScript';

// Write to file
// await Bun.write('output.tsx', data)

const file = await Bun.file('output.tsx');
console.log(await file.text())
console.log(file.size)
console.log(await file.stream())
console.log(await file.arrayBuffer())