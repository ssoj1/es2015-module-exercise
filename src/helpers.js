/** Given an array, returns a randomly selected item */

function choice(items) {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

/** Given an array, remove the first matching item, if item exists, 
 * and returns it. Otherwise returns undefined. */

function remove(items, item) {
    const itemIndex = items.indexOf(item);

    if (itemIndex >= 0) {
        const removedItem = items.splice(itemIndex, 1);
        return removedItem[0];
    } else {
        return undefined;
    }
}

export { choice, remove };