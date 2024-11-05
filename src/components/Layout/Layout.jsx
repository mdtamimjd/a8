import PropTypes from "prop-types"
import Navbar from "../Navbar.jsx"
const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}
Layout.propTypes = {
    children: PropTypes.object
}
export default Layout