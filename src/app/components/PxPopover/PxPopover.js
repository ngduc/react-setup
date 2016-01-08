import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import PxUtils from '../PxUtils/PxUtils';

import style from './PxPopover.css';

/**
 * PxPopover component contains Trigger element, Overlay element & Content element.
 * - source: https://github.com/ngduc - usage:
 * <PxPopover>
 *   <div data-trigger><button>Show Popover</button></div>
 *   <div data-content>My Content <button data-dismiss>Close</button></div>
 * </PxPopover>
 */
export default class PxPopover extends React.Component {
  state = {
    showed: false
  };

  componentDidMount() {
    this._toggle(ReactDOM.findDOMNode(this), false); // initially hide overlay & content.
  }

  onClick = (e) => {
    let showFlag;
    const el = e.target;
    if (el.getAttribute('data-overlay') || el.getAttribute('data-dismiss')) {
      showFlag = false;
    } else {
      showFlag = true;
    }
    this._toggle(PxUtils.findParentByChild(el, 'section'), showFlag);
  };

  onKeyDown = (e) => {
    if (e.keyCode === 27) {
      this._toggle(PxUtils.findParentByChild(e.target, 'section'), false);
    }
  };

  _toggle = (mainEl, showFlag) => {
    this.setState({ showed: showFlag });
    PxUtils.toggle({ overlayEl: mainEl.children[1], show: showFlag });
    PxUtils.toggle({ contentEl: mainEl.children[2], show: showFlag });
  };

  render() {
    return (
      <section className={style.popover} onClick={this.onClick} onKeyDown={this.onKeyDown}>
        {this.props.children[0]}
        <div className={style.overlay} data-overlay></div>
        <div className={style.content}>
          {this.props.children[1]}
        </div>
      </section>
    );
  }
}
