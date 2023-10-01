this.formOnLoad = function(executionContext) 
{
    var formContext = executionContext.getFormContext();
    formContext.ui.setFormNotification("This is a notification v2", "INFO","IDUnique011023");    
    if (formContext.getAttribute("telephone1").getValue() == null)
    {
        formContext.getAttribute("telephone1").setValue("123-456-7890");
        formContext.getControl("telephone1").addNotification({
            messages: ["Valor de Telefone foi atribuído com valor padrão!"],
            notificationLevel: "RECOMMENDATION",
            uniqueId: "IDUnique011023-2"
        })

    }
    
}
