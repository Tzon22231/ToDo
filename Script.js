<script>
    function AddElement()
    {
        console.log("TEst");
        var meindiv = document.createElement("div");
        meindiv.id = "test";
        meindiv.innerHTML = "Hallo";
        document.body.appendChild(meindiv);
    }
    function showBody()
    {
        var Test = document.getElementById("Boddy").innerHTML;
        console.log(Test);
        var index = Test.indexOf("<script>"[2]);
        var Test2 = Test.substring(0, index);
        console.log(Test2);
    }
   
</script>
