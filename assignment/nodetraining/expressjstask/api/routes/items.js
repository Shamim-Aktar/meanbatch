const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')

const Item=require('../model/item')

router.get('/',(req, res, next)=>{
Item.find().
exec().
then(doc=>{
  console.log(doc)
// if(docs.length>=0){
  res.status(200).json(doc)
// }
// else{
//   res.status(404).json({message:'No entries found'})
// }

}).catch(err=>{
    console.log(err)
res.status(500).json({error:err})
  })
})

router.post('/',(req, res, next)=>{

  const item=new Item({
    _id:new mongoose.Types.ObjectId(),
    name:req.body.name,
    price:req.body.price
  })
  item.save().then(result=>{
    console.log(result)
    res.status(201).json({
      message:'request handling for post',
      createdItem:result
    })
  }).catch(err=>{
      console.log(err)
  res.status(500).json({error:err})
    })

})

router.get('/:id', (req, res, next)=>{
  const id=req.params.id
  Item.findById(id).
  exec().
  then(doc=>{
    console.log(doc)
    if(doc){
        res.status(200).json(doc)
    }

    else{
        res.status(404).json({message:'No valid entry found'})
    }

  }).
  catch(err=>{
    console.log(err)
res.status(500).json({error:err})
  })
});




router.patch('/:id', (req, res, next)=>{
  const id=req.params.id
  const updatesOps={}
  for(const ops of req.body){
    updatesOps[ops.propName]=ops.value
  }
Item.update({_id:id},{$set:updatesOps})
.exec().
then(result=>{
  result.status(200).json(result)
}).
catch(err=>{
  console.log(err)
  res.status(500).json({
    error:err
  })
})

})

router.delete('/:id', (req, res, next)=>{
  const id=req.params.id
Item.remove({_id:id}).exec().
then(result=>{
  console.log(result)

      res.status(200).json(result)
}).catch(err=>{
    console.log(err)
res.status(500).json({error:err})
  })

})

module.exports=router
