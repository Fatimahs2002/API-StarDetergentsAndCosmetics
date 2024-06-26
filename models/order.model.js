module.exports=(mongoose)=>{
     const orders=mongoose.model(
          'order',
          mongoose.Schema
          ({
               user: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User',
                    required: true,
                  },
               products:[
                    {
                      productId: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: 'Product',
                        required: true
                      },
                      quantity: {
                        type: Number,
                        required: true,
                        min: 1
                      },
                    },
                  ],
                  totalAmount:{
                    type: Number,
                    required: true
                  },
                  status: {
                    type: String,
                    enum: ['pending', 'completed', 'cancelled'],
                    default: 'pending'
                  },
          },   
               {
                    timestamps:true
               }
          
          )
     )

     return orders
}