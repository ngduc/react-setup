
export default class PxUtil {
  static findParentByChild(child, parentTag) {
    let el = child;
    while (el && el.tagName !== parentTag) {
      el = el.parentElement;
    }
    return el;
  }

  static toggle(param) {
    const el = param[ Object.keys(param)[0] ]; // first param object.
    el.style.display = (param.show ? 'block' : 'none');
  }
}
