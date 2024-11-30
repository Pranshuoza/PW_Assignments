function getProcessingFee(paymentMethod) {
    switch (paymentMethod) {
      case "credit":
        console.log("Processing fee: 2%");
        break;
      case "debit":
        console.log("Processing fee: 1.5%");
        break;
      case "paypal":
        console.log("Processing fee: 3%");
        break;
      default:
        console.log("Invalid payment method");
    }
  }
   
  getProcessingFee("credit"); 
  getProcessingFee("debit");   
  getProcessingFee("paypal");  
  getProcessingFee("cash"); 
  