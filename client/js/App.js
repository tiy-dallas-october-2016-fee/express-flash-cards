if (window.FC === undefined) { window.FC = {}; }

(function() {

  class AppComponent extends React.Component {
    render() {
      return <div>

        <p>This is the app component</p>


        {this.props.children}

      </div>;
    }
  }

  FC.AppComponent = AppComponent;
})();
