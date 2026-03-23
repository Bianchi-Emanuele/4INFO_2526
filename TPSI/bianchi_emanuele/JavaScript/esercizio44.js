var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
];
function ordinaLibraryDecrescente(library) {
    return library.slice().sort((a,b) => b.title > a.title ? -1 : 1);
}
console.log((ordinaLibraryDecrescente(library)));