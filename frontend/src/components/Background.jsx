const StarBackground = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="stars-container absolute w-full h-full">
                {/* Create multiple layers of stars with different sizes/speeds via CSS */}
                <div className="stars-small"></div>
                <div className="stars-medium"></div>
                <div className="stars-large"></div>
            </div>
        </div>
    );
};

export default StarBackground;
