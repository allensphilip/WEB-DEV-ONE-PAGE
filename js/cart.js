var $addQuantity = $(".btn-quantity.plus"),
  $minusQuantity = $(".btn-quantity.minus"),
  $removeItem = $(".btn-remove");

$addQuantity.on("click", function (e) {
  e.preventDefault();
  var $item = $(this).parents(".item"),
    $quantityField = $item.find(".quantity_field"),
    currentQuantity = $quantityField.val(),
    nextQuantity = parseFloat(currentQuantity) + 1;

  $item.find(".current_quantity").html(nextQuantity);
  $quantityField.val(nextQuantity);

  calculateTotal();
});

$minusQuantity.on("click", function (e) {
  e.preventDefault();
  var $item = $(this).parents(".item"),
    $quantityField = $item.find(".quantity_field"),
    currentQuantity = $quantityField.val();
  var prevQuantity = currentQuantity <= 1 ? 0 : parseFloat(currentQuantity) - 1;

  $item.find(".current_quantity").html(prevQuantity);
  $quantityField.val(prevQuantity);

  calculateTotal();
});

$removeItem.on("click", function () {
  var $item = $(this).parents(".item");
  $item.remove();

  calculateTotal();
});

var calculateTotal = function () {
  var newSubTotal = 0;
  $(".quantity_field").each(function () {
    var quantity = $(this).val(),
      price = $(this).data("price");

    newSubTotal += parseFloat(quantity * price);
  });

  $(".sub-total .amount").html("£" + newSubTotal.toFixed(2));

  var withTax = newSubTotal * 1.2;

  var newTotal = withTax + 0;

  $(".total .amount").html("Total" + " " + "£" + newTotal.toFixed(2));
};

calculateTotal();
