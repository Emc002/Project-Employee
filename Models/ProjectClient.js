const mongoose = require('mongoose');

const ProjectClientSchema = new mongoose.Schema({
  code: {
    type: String,
    required: [true,`must provide code`],
  },
  client_code: {
    type: String,
    required: [true,`must provide client code`],
  },
  pic_email: {
    type: String,
    required: [true,`must provide pic email`],
    validate: {
      validator: function (v) {
        return /^\S+@\S+\.\S+$/.test(v);
      },
      message: 'Please Input Email Correctly'
    },
  },
  opportunity_name: {
    type: String,
    required: [true,`must provide opportunity name`],
  },
  description: {
    type: String,
    required: [true,`must provide description`],
  },
  sales_email: {
    type: String,
    required: [true,`must provide sales email`],
    validate: {
      validator: function (v) {
        return /^\S+@\S+\.\S+$/.test(v);
      },
      message: 'Please Input Email Correctly'
    },
  },
  status: {
    type: String,
    required: [true,`must provide status`],
  },
  last_modified: {
    type: Date,
    required: [true,`must provide lats modified`],
  },
  resources: [
    {
      qty: {
        type: Number,
        required: [true,`must provide quantity`],
      },
      position: {
        type: String,
        required: [true,`must provide position`],
        enum: {
          values: ['back end', 'front end', 'product owner'],
          message: '{VALUE} is not exist on the list',
        }
      },
      level: {
        type: String,
        required: [true,`must provide level`],
        enum: {
          values: ['junior', 'senior'],
          message: '{VALUE} is not exist on the list',
        }
      },
      ctc: {
        type: Number,
      },
      project_duration: {
        type: Number,
        required: [true,`must provide project duration`],
      },
    }
  ]

})

module.exports = mongoose.model('ProjectClient', ProjectClientSchema )


// {
//   "code": "Opp001",
//   "client_code": "C001",
//   "pic_email": "budi@masadepan.com",
//   "opportunity_name": "Front End & Back End Developer",
//   "description": "developer untuk project di client",
//   "sales_email": "angga.wibowo@idstar.group",
//   "status": "warm",
//   "last_modified": "2023-02-07 10:11:12",
//   "resources": [
//       {
//           "qty": 3,
//           "position": "front end",
//           "level": "junior",
//           "project_duration": 6
//       },
//       {
//           "qty": 1,
//           "position": "front end",
//           "level": "senior",
//           "ctc": 12000000,
//           "project_duration": 10
//       }
//   ]
// }