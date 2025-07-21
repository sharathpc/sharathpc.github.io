const FooterSection = () => {
    const year = new Date().getFullYear();
    return (
        <div id="footer-section" className="global-bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <p>Copyright &copy; {year} All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterSection
