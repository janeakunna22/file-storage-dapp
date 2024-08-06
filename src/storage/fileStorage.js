export class FileStorage {
    files;

    constructor() {
        this.files = new Map();
    }

    /**
     * ### FileStorage getAll
     * @description get all stored files.
     * @returns {*} list FileModel[]
     */
    getAll() {
        return Array.from(this.files.values());
    }

    /**
     * ### FileStorage addOne
     * @description store a single file.
     * @param {*} file FileModel
     */
    addOne(file) {
        this.files.set(file.id, file);
    }

    /**
     * ### FileStorage getOneById
     * @description get a single file given an id.
     * @param {*} id UUID
     * @returns FileModel | undefined (not found)
     */
    getOneById(id) {
        return this.files.get(id);
    }

    /**
     * ### FileStorage updateOne
     * @description update a single file.
     * @param {*} file FileModel
     */
    updateOne(file) {
        this.files.set(file.id, file);
    }
}

export const fileStorage = new FileStorage();
