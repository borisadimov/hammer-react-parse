var DocumentBox = React.createClass({
  mixins: [ParseReact.Mixin],
  observe: function() {
    var type = this.props.type
    return {
      documents: (new Parse.Query('document')).equalTo("type", type).ascending('createdAt')
    }
  },


  getInitialState: function() {
    return {
      activeDocId: -1,
      previewImage: '',
      documentUrl: ''
    }
  },

  handleActiveChange: function(doc, index){
    this.setState({
      activeDocId: index,
      previewImage: doc.preview.url(),
      documentUrl: doc.file.url()
    })

  },



  render: function() {
    return (
      <div className="documentBox">
        <DocumentList activeId={this.state.activeDocId} data={this.data.documents} activeChange={this.handleActiveChange}/>
        <Preview imageSrc={this.state.previewImage} documentUrl={this.state.documentUrl}/>
      </div>
    );
  }
});
//

var DocumentList = React.createClass({

  activate: function(doc, index){
    this.props.activeChange(doc,index);
  },
  render: function() {
    var documents = this.props.data.map(function(doc, index) {

      var classes = React.addons.classSet({
          'document': true,
          'active': index === this.props.activeId // this.props.isActive
        });

      return (
        <div className={classes}key={index} onClick={this.activate.bind(this, doc, index)}>
          {doc.name}
        </div>
      );

    }, this);

    return(
      <div className='documentList'>
        {documents}
      </div>
    );
  }

});

var Preview = React.createClass({

  render: function() {
    return (
      <div className='documentPreview'>
        <a href={this.props.documentUrl} target='_blank'>
          <img src={this.props.imageSrc}/>
        </a>
      </div>
    )
  }

})


