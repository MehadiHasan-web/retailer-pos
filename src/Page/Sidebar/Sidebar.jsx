

const Sidebar = () => {
  return (
    <>
    <div className="drawer z-10">
    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn btn-ghost btn-circle drawer-button">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
    </div> 
    <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <h2 className="text-center mb-8">Title heading</h2>
      <li><a>My Orders</a></li>
      <li><a>Pending Orders</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
    </div>
    </div>
    </>
  )
}

export default Sidebar
