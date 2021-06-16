import './layouts.scss';

const AdminLayout = ({children}) => {

    return (
        <>
            <div className="header d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border">
                <h5 className="my-0 mr-md-auot font-weight-normal">
                    <div className="nav-bar-brand">
                        <img src="/images/n64-logo-image-text.png" alt="Nintendo 64 Logo" />
                    </div>
                </h5>
                <nav className="my-2 my-md-0 mr-md-3"></nav>
            </div>
            {children}
        </>
    )
    
};

export default AdminLayout;