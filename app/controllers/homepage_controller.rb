class HomepageController < ApplicationController
  def index
  end

  def update_state
    State.where(id: params[:state_code]).first.update_attributes({doctor_count: params[:doctor_count], nurse_count: params[:nurse_count]})
    head :ok
  end
end
