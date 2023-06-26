import Nav from "../../components/Nav/Nav";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section style={{ display: "flex", height: "100vh" }}>
        {/* Include shared UI here e.g. a header or sidebar */}
       <div style={{ flexBasis: "200px", height: "100%" }}>
       <NavigationMenu />
       </div>
        <div style={{flex: 1, display: "flex", flexDirection: "column"}}>
        <div style={{ flexBasis: "50px" }}><Nav /></div>
        <div style={{ flex: 1, backgroundColor: "lightBlue"}}>
        {children}
        </div>
        </div>
      </section>
    )
  }