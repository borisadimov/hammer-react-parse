Parse.initialize("xxxx",
                   "xxxx");


var Tab = ReactTabs.Tab;
var Tabs = ReactTabs.Tabs;
var TabList = ReactTabs.TabList;
var TabPanel = ReactTabs.TabPanel;






var App = React.createClass({
  render() {
    return (
      <div>
        <Tabs>
          <TabList>
            <Tab>Type A</Tab>
            <Tab>Type B</Tab>
            <Tab>Type C</Tab>
          </TabList>
          <TabPanel>
            <DocumentBox type='typeA'/>
          </TabPanel>
          <TabPanel>
            <DocumentBox type='typeB'/>
          </TabPanel>
          <TabPanel>
            <DocumentBox type='typeC'/>
          </TabPanel>
        </Tabs>

      </div>
    );
  }
});

React.render(<App/>, document.getElementById('react-container'));