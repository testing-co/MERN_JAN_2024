import SubComponent from "./SubComponent";

const HeaderComponent = () => {
    return (
        <fieldset className="red">
            <legend>HeaderComponent.jsx</legend>
            <h4>this is the <span>header</span></h4>
            <SubComponent />
        </fieldset>
    );
};

export default HeaderComponent;