import { firebaseDb } from "./firebase";

export class FirebaseList {
    constructor(actions, modelClass, path = null) {
        this._actions = actions;
        this._modelClass = modelClass;
        this._path = path;
    }

    getPath() {
        return this._path
    }

    setPath(path) {
        this._path = path;
    }

    push(value) {
        return new Promise((resolve, reject) => {
            firebaseDb.ref(this._path).push(value, error =>  error ? reject(error) : resolve())
        })
    }

    subscribe(dispatch) {
        let ref = firebaseDb.ref(this._path);
        let initialized = false;
        let list = [];
        

        ref.once('value', () => {
            initialized = true;
            dispatch(this._actions.onLoad(list));
          });


        ref.on('child_added', snapshot => {
            if (initialized) {
                dispatch(this._actions.onAdd(this.unwrapSnapshot(snapshot)));
            }
            else {
                list.push(this.unwrapSnapshot(snapshot));
            }
        });

        

        this._unsubscribe = () => ref.off();
    }

    unsubscribe() {
        this._unsubscribe();
    }

    unwrapSnapshot(snapshot) {
        let attrs = snapshot.val();
        attrs.key = snapshot.key;
        return new this._modelClass(attrs);
      }

}