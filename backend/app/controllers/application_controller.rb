class ApplicationController < ActionController::API
  protect_from_forgery with: :null_session, if: -> {
    request.format.json? || request.content_type == "application/json"
  }
end
