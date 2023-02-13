const Preloader = () => {

    window.onload = function() {
        document.querySelector('.preloader').classList.add("preloader-remove");
    };

    return (
    <div className="preloader">
        <div className="preloader-5"></div>
    </div>
    );
}

export default Preloader;
