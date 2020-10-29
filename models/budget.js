const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BudgetSchema = new Schema ({
    title: {
        type: String,
        required: [true, 'Name of title is required']
    },
    budget: {
        type: Number,
        required: [true, 'Amount of budget is required']
    },
    backgroundColor: {
        type: String,
        validate: {
            // /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
            validator: function(v) {
                return /^#([A-Fa-f0-9]{6})$/.test(v);
            },
            message: props => `${props.value} is not a valid color!`
        },
        required: [true, 'Name of title is required']
    }
});

const Budget = mongoose.model('budget', BudgetSchema);

module.exports = Budget;