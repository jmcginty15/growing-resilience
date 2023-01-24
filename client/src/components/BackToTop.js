import './BackToTop.css';

const BackToTop = () => {
    return <button id="back-to-top" onClick={() => window.scrollTo(0, 0)}><i className="fa fa-arrow-up" /></button>
}

export default BackToTop;
