const path=require('path');

const express=require('express');
const bodyParser=require('body-parser');

const app=express();

const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin', adminRoutes);
// Note that if you are redirecting to the home page'/' then you do not have to specify it- its already covered in the ShopRoutes file
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});



app.listen(3000);