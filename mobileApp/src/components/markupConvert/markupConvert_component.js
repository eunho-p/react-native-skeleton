import React, { Component } from 'react'
import { View, TextInput, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { changeTextContent } from './markupConvert_action'

const mapStateToProps = state => ({ ...state.articles.edited })
const mapDispatchToProps = dispatch => ({
  onChangeTextContent: row_text => dispatch(changeTextContent(row_text))
})

class MarkupConvert extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 8 }}>
          <TextInput
            style={{ flex: 1, textAlignVertical: 'top', }}
            multiline={true}
            value={this.props.row_text}
            onChangeText={this.props.onChangeTextContent} />
        </View>
        <ScrollView style={{ flex: 1, padding: 8 }}>
          <Text>{this.props.markup_text}</Text>
        </ScrollView>
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MarkupConvert)