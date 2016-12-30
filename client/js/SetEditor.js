if (window.FC === undefined) { window.FC = {}; }

(function() {

  class SetEditor extends React.Component {

    submitSet(evt) {
      evt.preventDefault();

      console.log('submitting yo', this.nameInput.value, this.descriptionInput.value);

      $.ajax({
        url: '/api/sets',
        method: 'POST',
        data: {
          name: this.nameInput.value,
          description: this.descriptionInput.value
        }
      })
      .done((data) => {
        console.log('POST finished');
        ReactRouter.browserHistory.goBack();
      });


    }

    render() {
      return <div className="set-editor">
        <h2>Set Editor</h2>

        <form onSubmit={(evt) => { this.submitSet(evt); }}>

          <input placeholder="name" ref={(input) => { this.nameInput = input; }} />

          <input placeholder="description" ref={(input) => { this.descriptionInput = input; }} />

          <button>Save</button>
        </form>
      </div>
    }

  }

  FC.SetEditor = SetEditor;

})();
