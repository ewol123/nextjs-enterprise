import { NextResponse } from 'next/server'

export async function GET() {

  const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio nunc, eleifend a nisl efficitur, viverra auctor eros. Sed diam diam, tincidunt ut ex a, accumsan vehicula ex. Nam bibendum dui id dignissim consequat. In iaculis magna eu feugiat auctor. Nulla venenatis, mi et finibus dictum, risus tortor dapibus odio, et viverra tellus mauris ac neque. Vestibulum a tellus gravida.';

  const data = [];

  for (let i = 0; i < 30; i++) {
    data.push({
      image: "https://placehold.co/300x200",
      title: `List item ${i + 1}`,
      description
    });

  }

  await new Promise((resolve) => {
    setTimeout(() => resolve('done'), 3000);
  });


  return NextResponse.json({ data })
}