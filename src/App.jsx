import Card from "./components/Card";

const App = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <Card color="wow" />
                </div>
                <div className="col-md-6">
                    <Card color="wtf" />
                </div>
            </div>
        </div>
    );
};

export default App;

