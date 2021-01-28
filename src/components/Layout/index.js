import s from './style.module.css';

const Layout = ({id, title, desc, urlBg, colorBg}) => {
    const styleRoot = urlBg ? {backgroundImage: "url(" + urlBg + ")"} : 
                      colorBg ? {backgroundColor: colorBg} : {};
    return (
        <section className={s.root} id={id} style={styleRoot}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{ title || 'no title' }</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={`${s.desc} ${s.full}`}>
                        <p>{ desc || 'no secription' }</p>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Layout;