
import Image from "next/image";
import Button from "components/Button/Button";

async function getData(): Promise<Record<string, string>[]> {
  const res = await import("../../app/api/route");

  return await (await res.GET()).json();
}

const List = async () => {

  const res = await getData();

  return (
    <>
      {res?.data?.map((el) => (
        <div key={el.title} style={{ border: "2px solid black", borderRadius: "5px", padding: "5px", display: "flex", width: "600px", margin: "5px" }}>
          <div style={{ flex: 1 }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><rect width="100%" height="100%" fill="#DDDDDD"/><path fill="#999999" d="m63.68 94.06-2.6-.46q.3-2.08 1.16-3.65.86-1.57 2.15-2.62t2.96-1.58q1.67-.53 3.59-.53 2 0 3.61.57 1.61.57 2.75 1.58 1.14 1.01 1.75 2.37.61 1.36.61 2.94 0 1.38-.31 2.43-.31 1.05-.89 1.83-.58.78-1.44 1.32t-1.94.9q2.6.82 3.88 2.5 1.28 1.68 1.28 4.22 0 2.16-.8 3.82-.8 1.66-2.16 2.79-1.36 1.13-3.15 1.71-1.79.58-3.79.58-2.18 0-3.8-.5-1.62-.5-2.82-1.48-1.2-.98-2.04-2.4-.84-1.42-1.44-3.28l2.18-.9q.86-.36 1.61-.19.75.17 1.09.81.36.7.79 1.38.43.68 1.03 1.21.6.53 1.41.86.81.33 1.93.33 1.26 0 2.2-.41.94-.41 1.57-1.07.63-.66.94-1.47.31-.81.31-1.63 0-1.04-.22-1.89-.22-.85-.92-1.45-.7-.6-2.01-.94-1.31-.34-3.51-.34V97.9q1.82-.02 3.02-.34t1.91-.89q.71-.57.99-1.37.28-.8.28-1.76 0-2.04-1.14-3.1t-3.04-1.06q-.88 0-1.62.25-.74.25-1.33.7-.59.45-.99 1.05-.4.6-.6 1.32-.34.92-.89 1.22-.55.3-1.55.14Zm40.64 5.94q0 3.78-.81 6.57-.81 2.79-2.24 4.61-1.43 1.82-3.38 2.71-1.95.89-4.21.89t-4.19-.89q-1.93-.89-3.35-2.71-1.42-1.82-2.22-4.61-.8-2.79-.8-6.57 0-3.8.8-6.58.8-2.78 2.22-4.6 1.42-1.82 3.35-2.71 1.93-.89 4.19-.89 2.26 0 4.21.89 1.95.89 3.38 2.71 1.43 1.82 2.24 4.6.81 2.78.81 6.58Zm-5.1 0q0-3.14-.46-5.2t-1.23-3.28q-.77-1.22-1.77-1.71t-2.08-.49q-1.06 0-2.05.49-.99.49-1.75 1.71t-1.21 3.28q-.45 2.06-.45 5.2t.45 5.2q.45 2.06 1.21 3.28.76 1.22 1.75 1.71t2.05.49q1.08 0 2.08-.49t1.77-1.71q.77-1.22 1.23-3.28.46-2.06.46-5.2Zm28.3 0q0 3.78-.81 6.57-.81 2.79-2.24 4.61-1.43 1.82-3.38 2.71-1.95.89-4.21.89t-4.19-.89q-1.93-.89-3.35-2.71-1.42-1.82-2.22-4.61-.8-2.79-.8-6.57 0-3.8.8-6.58.8-2.78 2.22-4.6 1.42-1.82 3.35-2.71 1.93-.89 4.19-.89 2.26 0 4.21.89 1.95.89 3.38 2.71 1.43 1.82 2.24 4.6.81 2.78.81 6.58Zm-5.1 0q0-3.14-.46-5.2t-1.23-3.28q-.77-1.22-1.77-1.71t-2.08-.49q-1.06 0-2.05.49-.99.49-1.75 1.71t-1.21 3.28q-.45 2.06-.45 5.2t.45 5.2q.45 2.06 1.21 3.28.76 1.22 1.75 1.71t2.05.49q1.08 0 2.08-.49t1.77-1.71q.77-1.22 1.23-3.28.46-2.06.46-5.2Zm36.86 7.84-2.62 2.58-6.78-6.78-6.84 6.82-2.62-2.58 6.84-6.86-6.52-6.52 2.6-2.6 6.52 6.52 6.48-6.48 2.64 2.6-6.5 6.5 6.8 6.8Zm24.08 2.02h7.42q.8 0 1.27.45t.47 1.19v2.96h-19.84v-1.64q0-.5.21-1.05t.67-.99l8.78-8.8q1.1-1.12 1.97-2.14.87-1.02 1.45-2.02t.89-2.03q.31-1.03.31-2.17 0-1.04-.3-1.83t-.85-1.33q-.55-.54-1.32-.81t-1.73-.27q-.88 0-1.63.25-.75.25-1.33.7-.58.45-.98 1.05-.4.6-.6 1.32-.34.92-.88 1.22-.54.3-1.56.14l-2.6-.46q.3-2.08 1.16-3.65.86-1.57 2.15-2.62t2.96-1.58q1.67-.53 3.59-.53 2 0 3.66.59 1.66.59 2.84 1.67t1.84 2.6q.66 1.52.66 3.38 0 1.6-.47 2.96-.47 1.36-1.26 2.6t-1.85 2.4q-1.06 1.16-2.22 2.36l-6.52 6.66q.94-.28 1.87-.43.93-.15 1.77-.15Zm33.2-9.86q0 3.78-.81 6.57-.81 2.79-2.24 4.61-1.43 1.82-3.38 2.71-1.95.89-4.21.89t-4.19-.89q-1.93-.89-3.35-2.71-1.42-1.82-2.22-4.61-.8-2.79-.8-6.57 0-3.8.8-6.58.8-2.78 2.22-4.6 1.42-1.82 3.35-2.71 1.93-.89 4.19-.89 2.26 0 4.21.89 1.95.89 3.38 2.71 1.43 1.82 2.24 4.6.81 2.78.81 6.58Zm-5.1 0q0-3.14-.46-5.2t-1.23-3.28Q209 90.3 208 89.81t-2.08-.49q-1.06 0-2.05.49-.99.49-1.75 1.71t-1.21 3.28q-.45 2.06-.45 5.2t.45 5.2q.45 2.06 1.21 3.28.76 1.22 1.75 1.71t2.05.49q1.08 0 2.08-.49t1.77-1.71q.77-1.22 1.23-3.28.46-2.06.46-5.2Zm28.3 0q0 3.78-.81 6.57-.81 2.79-2.24 4.61-1.43 1.82-3.38 2.71-1.95.89-4.21.89t-4.19-.89q-1.93-.89-3.35-2.71-1.42-1.82-2.22-4.61-.8-2.79-.8-6.57 0-3.8.8-6.58.8-2.78 2.22-4.6 1.42-1.82 3.35-2.71 1.93-.89 4.19-.89 2.26 0 4.21.89 1.95.89 3.38 2.71 1.43 1.82 2.24 4.6.81 2.78.81 6.58Zm-5.1 0q0-3.14-.46-5.2t-1.23-3.28q-.77-1.22-1.77-1.71t-2.08-.49q-1.06 0-2.05.49-.99.49-1.75 1.71t-1.21 3.28q-.45 2.06-.45 5.2t.45 5.2q.45 2.06 1.21 3.28.76 1.22 1.75 1.71t2.05.49q1.08 0 2.08-.49t1.77-1.71q.77-1.22 1.23-3.28.46-2.06.46-5.2Z"/></svg>
          </div>
          <div style={{ flex: 3, display: "flex", flexDirection: "column" }}>
            <div>{el.title}</div>
            <div>{el.description} lorem ipsum asd asd ide majd jön valami sok szöveg</div>
            <div>
              <Button />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};



export default List;