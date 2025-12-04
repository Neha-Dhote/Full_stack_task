import mongoose from "mongoose";

let userSchema = mongoose.Schema({
    name: {
        type: String
    },
    phone: {
        type: Number
    },
    email: {
        type: String
    },
    address: {                  (     1st portion )
        type: Object
    }
})

let UserModel = new mongoose.model("users", userSchema)

export { UserModel }

// db.collectionn.insertOne()
// UserModel.insertOne()/insertMany()
// UserModel.findOne()/find()
// UserModel.updateOne()/updateMany()
// UserModel.deleteOne()/deleteMany()




import mongoose from "mongoose";

let addressObject = {
    street: "", city: "", state: "", country: "", pincode: ""
}


let userSchema = mongoose.Schema({
    name: {
        type: String
    },
    phone: {
        type: Number
    },
    email: {
        type: String
    },
    address: {
        type: Object,
        default: addressObject
    },
    timeStamp: {
        type: String,
        // default: Date.now()
        // UTC -> IST(UTC+5:30Hr)
    }
})
                                          { 2nd portion }
userSchema.pre("save", function () {
    this.timeStamp = Date.now()
})

let UserModel = new mongoose.model("users", userSchema)

export { UserModel }

