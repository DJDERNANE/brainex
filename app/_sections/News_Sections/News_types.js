const News_Types = ({active = 'Updates'}) => {
    return (
        <div className="news-types-section py-4  container flex flex-col md:flex-row justify-between items-center my-[50px] ">
            <div className={`type-item ${active == 'Updates' ? 'active' : ''}`}>
                Updates
            </div>
            <div  className={`type-item ${active == 'Updatesxc' ? 'active' : ''}`}>
                Updates
            </div>
            <div className={`type-item ${active == 'Updatesds' ? 'active' : ''}`}>
                Updates
            </div>
            <div className={`type-item ${active == 'Updatesfv' ? 'active' : ''}`}>
                Updates
            </div>
            <div className={`type-item ${active == 'Updatdsfes' ? 'active' : ''}`}>
                Updates
            </div>

        </div>
    );
}

export default News_Types