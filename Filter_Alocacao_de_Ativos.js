        //get attribute to use as Filter    
        var attributeControl = formContext.getAttribute("myAttribute");
        var attributeValue = attributeControl.getValue();

        //snippet
        var viewControl = formContext.getControl("myViewControl");
        var customFilter = "<filter type='and'><condition attribute='ativoId' operator='eq' value='${attributeValue}' /></filter>";
        viewControl.addCustomFilter(customFilter);
