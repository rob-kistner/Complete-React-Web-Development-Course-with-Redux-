class Header extends React.Component
{
    render() {
        return(
            <p>from the Header component</p>
        );
    }
}

const jsx = (
    <div className="container mt-5">
        <p>JSX content here</p>
        <Header />
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));