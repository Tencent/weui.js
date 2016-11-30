export const depthOf = (object) => {
    let depth = 1;
    if (object.children && object.children[0]) {
        depth = depthOf(object.children[0]) + 1;
    }
    return depth;
};