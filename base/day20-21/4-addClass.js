/**
 * [Append the className to the element object]
 * @param {[Object]} element [operation element object]
 * @param {[String]} value   [value is to append className]
 */
function appendClassName(element, value, append = true) {
    if (append) {
        var space = (element.className) ? ' ': '';
        element.className += space + value;
    } else {
        element.className = value;
    }
    return element;
}