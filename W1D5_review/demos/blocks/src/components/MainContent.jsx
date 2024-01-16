import SubContent from "./SubContent";
import Advertisement from "./Advertisement";

const MainContent = () => {
    return (
        <div className='main block'>
            <div className="flex">
                <SubContent />
                <SubContent />
                <SubContent />
            </div>
            <Advertisement />
        </div>
    );
};

export default MainContent;