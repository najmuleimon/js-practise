// ১. setTimeout এর ভিতরে একটা কিছু কনসোল লগ করবে যেটা সাড়ে তিন সেকেন্ড পরে আউটপুট দেখাবে। ,
setTimeout(() => {
    console.log('This is after 3.5 seconds');
}, 3500)

// ২. prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো। যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও 
const sum = () => {
    const numText = prompt('Please Enter a number')
    if(numText){
        let num = parseFloat(numText)
        let result = num + 200
        alert(result)
    }
}
// sum()

// ৩. ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর লোকেশন দেখতে চাও। যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন এর href জিনিসটা কনসোল লগ করে দেখাও 
const loc = () => {
    const res = confirm('Do you want to see your website location')
    if(res){
        console.log(location.href);
    }
    else{
        console.log('Thanks');
    }
}
// loc()

