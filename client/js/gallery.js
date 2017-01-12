if (window.FC === undefined) { window.FC = {}; }

(function() {

  var mountNode = document.querySelector('#react-root');

  class GalleryComponent extends React.Component {

    render() {
      return <div>
        <h1>Gallery</h1>
        <FC.QuizSummaryComponent
          correct={5}
          incorrect={5}
          skipped={0}
          />

        <FC.QuizSummaryComponent
          correct={2}
          incorrect={1}
          skipped={7}
          />



      </div>
    }

  }

  ReactDOM.render(<GalleryComponent />, mountNode);

})();
