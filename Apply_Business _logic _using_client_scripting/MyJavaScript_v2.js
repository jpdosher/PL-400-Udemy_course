this.formOnLoad = function(executionContext) {
    var formContext = executionContext.getFormContext();
    formContext.ui.setFormNotification("This is a notification v2", "INFO","IDUnique011023");    
    if(formContext.getAttribute("telephone1").getValue() == null){
        formContext.getAttribute("telephone1").setValue("123-4567");
    }
    

}
