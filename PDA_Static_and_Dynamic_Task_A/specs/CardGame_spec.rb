require("minitest/autorun")
require('minitest/rg')
require_relative('../card.rb')
require_relative('../CardGame.rb')


class CardGameTest < MiniTest::Test

  def setup
    @card1 = Card.new('hearts', 10)
    @card2 = Card.new('hearts', 9)
    @card3 = Card.new('hearts', 9)
    @card4 = Card.new('hearts', 9)

    @game1 = CardGame.new
  end

  def test_checkforAce()
    assert_equal(false, @game1.checkforAce(@card1))
  end

  def test_highest_card__higher_card()
    assert_equal(@card1, @game1.highest_card(@card1, @card2) )
  end

  def test_highest_card__higher_card__equal()
    assert_equal(nil, @game1.highest_card(@card3, @card4) )
  end

  def test_cards_total()
    assert_equal("You have a total of 19", CardGame.cards_total([@card1, @card2]))
  end

end
