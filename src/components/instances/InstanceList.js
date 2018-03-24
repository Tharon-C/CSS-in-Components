import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { FlatButton } from "material-ui";
import { MediaCardGroup, Element } from "../../cyverse-ui/";
import InstanceCard, { InstanceListHeader } from "./InstanceCard";

class InstanceList extends Component {
  state = {
    batchMode: false,
    selectedItems: []
  };
  onCheck = (e, state, item) => {
    const list = this.state.selectedItems;
    // We can set or use any prop we want for this check
    const curr = item.props.uid;
    const selectedItems = list.includes(curr)
      ? list.filter(i => curr !== i)
      : [...list, curr];
    this.setState({ selectedItems });
  };
  render() {
    const { filter, deleteInstance, instances, showHeader = true, loadMoreEnteries, range, isSticky } = this.props;
    const { selectedItems } = this.state;
    const batchMode = selectedItems.length > 0;
    return (
      <section style={{ maxWidth: "1000px", margin: "auto" }}>
        {showHeader ? (
          <InstanceListHeader
            isSticky={isSticky}
            batchMode={batchMode}
            onBatchClick={(e, isChecked) => {
              this.setState({
                selectedItems: isChecked ? instances.map(image => image.id) : []
              });
            }}
          />
        ) : null}
        <MediaCardGroup>
          {instances.filter(filter).map((image, i) => {
              return (
                <InstanceCard
                  key={image.id}
                  uid={image.id}
                  isCheckable={selectedItems.length > 0}
                  checked={selectedItems.includes(image.id)}
                  onCheck={this.onCheck}
                  image={image}
                  onDelete={deleteInstance}
                />
              );
            })}
        </MediaCardGroup>
      </section>
    );
  }
}

function mapStateToProps(store) {
  return {instances: store.instanceList.data}
}

export default connect(mapStateToProps, null)(InstanceList);